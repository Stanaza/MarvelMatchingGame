import React from "react";
import {Table} from "react-bootstrap";
import './TopTable.css'


const TopTable = ({localStorageData, title, level}) => {
    return (
        <>
            <p className='top-title'>TOP 10 {title}</p>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>№</th>
                    <th>User</th>
                    <th>Time</th>
                    <th>Tries</th>
                </tr>
                </thead>
                <tbody>
                {
                    localStorageData.filter(data => data.level === level).slice(0, 10).map(user => {
                        return (
                            <tr key={user.name + user.time + user.tries}>
                                <th>{localStorageData.filter(data => data.level === level).indexOf(user) + 1}</th>
                                <td>{`${user.name} ${user.lastName} ${user.email}`}</td>
                                <td>{user.time}</td>
                                <td>{user.tries}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
        </>
    );
}
export default TopTable;