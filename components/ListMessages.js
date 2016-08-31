import React, { Component, PropsType } from 'react'
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

export default class ListMessages extends Component {
	render() {
		const { messages } =this.props

		var list = messages.map((item) => {
			return (
				<ListItem>{
					item.userName + ': '+ item.content
				}</ListItem>
			)
		})

		return (
			<List>
				{list}

			</List>
		)
	}
}
