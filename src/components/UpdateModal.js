import React, {useState} from "react";

export default function UpdateModal({updateStudent , targetStudent}) {
    
        const [student, setStudent] = useState(targetStudent || {
            name: "",
            major: "",
            age: "",
            score: ""   
        });

        const handleChange = (e) => {
            const { name, value} = e.target;

            setStudent({
                ...student,
                [name]: value
            });
        };

        const handleSave = () => {
            updateStudent(student.id, student);
        };
       
    return (
        <div className="modal fade" id="UpdateModal">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h5 className="modal-title">학생 정보 수정</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <div className="modal-body">
                        <label>ID</label>
                        <input type="text" className="form-control mb-2" value={student.id} disabled />

                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                        />

                        <label>Major</label>
                        <input
                            type="text"
                            className="form-control mb-2"
                            name="major"
                            value={student.major}
                            onChange={handleChange}
                        />

                        <label>Age</label>
                        <input
                            type="number"
                            className="form-control mb-2"
                            name="age"
                            value={student.age}
                            onChange={handleChange}
                        />

                        <label>Score</label>
                        <input
                            type="number"
                            className="form-control mb-2"
                            name="score"
                            value={student.score}
                            onChange={handleChange}
                        />
                        
                        {/* 수정버튼 */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={handleSave}
                            >수정 완료</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
