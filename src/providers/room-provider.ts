import { Injectable } from '@angular/core';
import { ConnectionProvider } from './connection.provider';
import { Room } from '../pages/models/Room';

@Injectable()
export class RoomProvider {

  public rooms = new Array<Room>();


  constructor(public connection: ConnectionProvider) {
    this.loadRoomsFromAPI();
  }

  // Load projects from api
  loadRoomsFromAPI() {
    var h = this;
    this.connection.getReqeuest('/api/v1/rooms', function (results) {
      console.log(results);
      h.rooms = results;
    });
  }

  // Return all the projects
  getAllRooms() {
    return this.rooms;
  }

  // Get a specific project by its id
  getRoomsById(id) {
    return this.rooms[this.getRoomsKeyByID(id)];
  }

  getRoomsKeyByID(id) {
    for (let key in this.rooms) {
      if (this.rooms[key].id == id) {
        return key;
      }
    }
  }

  // Add a new project
  addProject(project) {
    var h = this;
    return this.connection.postReqeuest('/api/v1/rooms', project, function (results) {
      if (results.errorCode == null) {
        h.loadRoomsFromAPI();
        return this.getProjectById(project.id);
      }
    });
  }

  updateProject(projectUpdate) {
    var h = this;
    return this.connection.putReqeuest('/api/v1/rooms', projectUpdate, function (results) {
      if (results.errorCode == null) {
        h.loadRoomsFromAPI();
        return this.getProjectById(projectUpdate.id);
      }
    });
  }

  deleteProject(id) {
    var h = this;
    return this.connection.deleteReqeuest('/api/v1/rooms/' + id, function (results) {
      if (results.errorCode == null) {
        h.loadRoomsFromAPI();
      }
    });
  }

}