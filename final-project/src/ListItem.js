const ListItem = props => <li onClick={(e) => props.removeItem(`${e.target.innerText}`)}>{props.listItem}</li>

export default ListItem;