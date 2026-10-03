import fs from 'fs'

function getData() {
    let data = fs.readFileSync('./data/data.json', 'utf-8')
    data = JSON.parse(data)
    return data
}

const getStudents = (req, res) => {
    try {
        let data = getData()

        res.status(200).json({
            message: "Students received successfully",
            success: true,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

const createStudent = (req, res) => {
    try {
        let { name, course, id } = req.body

        if (!name || !course || !id) {
            return res.status(400).json({
                message: "Name, course and id are required",
                success: false
            })
        }

        let data = getData()

        data.push({ name, course, id })

        fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 3))

        res.status(201).json({
            message: "Student added successfully",
            success: true,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

const updateStudent = (req, res) => {
    try {
        let { name, course } = req.body
        let id = req.params.id

        let data = getData()

        let student = data.find(e => e.id == id)

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
                success: false
            })
        }

        if (name) {
            student.name = name
        }

        if (course) {
            student.course = course
        }

        fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 3))

        res.status(200).json({
            message: "Student updated successfully",
            success: true,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

const deleteStudent = (req, res) => {
    try {
        let id = req.params.id
        let data = getData()
        let index = data.findIndex(e => e.id == id)

        if (index === -1) {
            return res.status(404).json({
                message: "Student not found",
                success: false
            })
        }

        data.splice(index, 1)

        fs.writeFileSync('./data/data.json', JSON.stringify(data, null, 3))

        res.status(200).json({
            message: "Student deleted successfully",
            success: true,
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export {getStudents, createStudent, updateStudent, deleteStudent}