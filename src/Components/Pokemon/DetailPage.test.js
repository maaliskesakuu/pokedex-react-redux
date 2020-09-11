import React from "react"

import { shallow } from "enzyme"
import DetailPage from "./DetailPage"

var pokemon = {
    sprites: { front_default: "", name:'pika'}
}

test("<DetailPage> should receive the id props", (done) => {
    
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(pokemon)
    }))

    var wrap = shallow(<DetailPage match={{ params: { id: 25 } }} />)

    expect(global.fetch).toHaveBeenCalledTimes(1)

    expect(global.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/25")

    process.nextTick(() => {
        // wrap.update()
        expect(wrap.find('.card-title').text()).toBe('pika')
        console.log(wrap.debug())
        done()
    })
})
