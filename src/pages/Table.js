import React from "react";

function Table() {
    return(
        <div>
            <div id={"content-table"}>
                <div id={"addHair"}>
                    <form action="/" method="post">
                        <label htmlFor="name">Enter name: <br/></label>
                        <input required id="name" type="text" name="nameField" placeholder="Your name."/><br/>
                        <label htmlFor="date">Enter date: </label><br/>
                        <input required id="date" type="date" name="dateField"/><br/>

                        <label htmlFor="time">Enter time: </label><br/>
                        <input required type="time" id="time" min="10:00" max="20:00" name="timeField"/><br/>
                        <label htmlFor="hairStyle">Choose a hairstyle: </label><br/>
                        <select required name="hairStyle" id="hairstyle">

                        </select><br/>
                        <input type="submit" value="OK"/>
                    </form>

                    <form action="/addh" method="post">
                        <label htmlFor="stylename">Style: <br/></label>
                        <input required id="stylename" type="text" name="stylename" placeholder="Hair style name"/><br/>
                        <label htmlFor="picURL">Picture: <br/></label>
                        <input required id="picURL" type="text" name="picURL" placeholder="Picture Url"/><br/>
                        <input type="submit" value="Meh"/>
                    </form>
                </div>
                <div id={"div-table"}>
                    <table id={"table"}>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Hair name</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>artemKabilov</td>
                            <td><input readOnly={true} type="date"/></td>
                            <td><input readOnly={true} type="text" value={"Text"}/></td>
                            <td>Test</td>
                            <td>
                                <input type="hidden"/>
                                <input type={"button"} value={"X"}/>
                                <input type={"button"} value={"Update"}/>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Table