import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { computed, observable } from 'mobx'
import timeEntries from '../stores/TimeEntries'

@observer
export default class SubPage extends Component {
	@observable search_text = 'mi proyecto'

	constructor(props) {
		super(props)	
	}

	@computed
	get projectEntries () {
		return timeEntries.filter({ project_name: this.search_text })
	}
	
	onChange (event) {
		this.search_text = event.target.value
	}

	componentWillMount () {
    	timeEntries.fetch({ data: { all: true } })
  	}

	render() {
	 
		return (
			<div className="page posts">
				<h1>Time Entires</h1>
				Ingrese el nombre de un proyecto
				<input type="text" name="project_name" onChange={this.onChange.bind(this)}/>
				<br/>
				<ul>
					{this.projectEntries ? this.projectEntries.map(entry => {
						return <li key={entry.get('id')} style={{border: '1px solid'}}>
						<span>{entry.get('project_name')}</span>
						<p>{entry.get('description')}</p>
						</li>
					}) : 'Loading...'}
				</ul>
			</div>
		)
	}
}