import fs from 'fs'

function getData() {
    let data = fs.readFileSync('./data/data.json', 'utf-8')
    data = JSON.parse(data)
    return data
}

const getStudents = (req, res) => {
    let data = getData()

    res.status(200).json({
        message: "Students received successfully",
        success: true,
        data: data
    })
}

export { getStudents }