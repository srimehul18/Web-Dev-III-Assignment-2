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

const createStudent = (req, res) => {
    let { name, course, id } = req.body

    if (!name || !course || !id) {
        return res.status(404).json({
            message: "Data not found",
            success: false
        })
    }

    let data = getData()

    data.push({name, course, id})

    fs.writeFileSync( './data/students.json', JSON.stringify(data, null, 3))

    res.status(201).json({
        message: "Student added successfully",
        success: true,
        data: data
    })
}

export { getStudents, createStudent }