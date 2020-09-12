import React from "react"
import { shallow } from "enzyme"
import SearchBar from "./SearchBar"

test("SearchBar state should be updated upon input change", () => {
    const wrap = shallow(<SearchBar />)

    expect(wrap.state()).toEqual({})

    wrap.find("input#search").simulate("change", {
        target: { value: "hello", id: "search" },
    })

    console.log(wrap.state())

    expect(wrap.state()).toEqual({ search: "hello" })
})
