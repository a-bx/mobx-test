const apiPath = 'http://dev.gettimeflow.com/api/v1'
import adapter from 'mobx-rest-jquery-adapter'
import { apiClient, Collection, Model } from 'mobx-rest'
import $ from 'jquery';

apiClient(adapter, { apiPath })

$.ajaxSetup({
    headers: { 'AUTHTOKEN': '' }
});

class TimeEntry extends Model { }
class TimeEntires extends Collection {
  url ()  { return `/time_entries` }
  model () { return TimeEntry }
}

export default new TimeEntires()