import React, {useState} from "react";

export default function CreateModal({createStudent}) {

    const [student, setStudent] = useState({
        name: "",
        major: "",
        age: "",
        score: ""
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    };

    const handleSave = () => {
        createStudent(student);
        setStudent({ 
            name: "",
            major: "",
            age: "",
            score: ""
        });
    };

    return (
        <div className="modal fade" id="CreateModal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">새 학생 추가</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={student.name} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" name="age" value={student.age} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Score</label>
                        <input type="number" className="form-control" name="score" value={student.score} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Major</label>
                        <input type="text" className="form-control" name="major" value={student.major} onChange={handleChange} placeholder="Ex: CS, EE"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>  
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSave}>저장하기</button>
                </div>
            </div>
        </div>
    </div>
    );
}