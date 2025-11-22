import React, { useState } from "react";
import CreateModal from "../CreateModal";
import UpdateModal from "../UpdateModal";

const API_URL = "https://69196eb99ccba073ee92e8ba.mockapi.io/students";

export default function ShowList() {

    // 학생 목록
    const [students, setStudents] = useState([]);
    // update 할 학생
    const [selectedStudent, setSelectedStudent] = useState(null);
    
    // 불러오기
    const getStudents = () => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error("Error:", error));
    };

    // 추가하기
    const handleCreate = (newStudent) => {
        fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStudent),
        }).then(() => {
            alert("추가 완료!");
            getStudents();
        });
    };

    // 수정하기
    const handleUpdate = (id, updateStudent) => {
        fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(updateStudent),
        }).then(() => {
            alert("수정 완료");
            getStudents();
            setSelectedStudent(null);
        });
    };

    // 삭제하기
    const handleDelete = (id) => {
        if (window.confirm("삭제하시겠습니까?")) {
            fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            }).then(() => {
                getStudents();
            });
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">학생 관리 시스템</h2>

            <div className="d-flex justify-content-between mb-3">
                <button className="btn btn-success" onClick={getStudents}>데이터 불러오기</button>

                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#CreateModal">학생 추가하기</button>
            </div>
            
            <table className="table table-bordered table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Major</th>
                        <th>Age</th>
                        <th>Score</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.major}</td>
                            <td>{student.age}</td>
                            <td>{student.score}</td>
                            <td>
                                <button className="btn btn-warning btn-sm me-2" data-bs-toggle="modal" data-bs-target="#UpdateModal" onClick={() => setSelectedStudent(student)}>수정</button>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student.id)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <CreateModal createStudent={handleCreate}/>

            {selectedStudent && (
                <UpdateModal key={selectedStudent.id} targetStudent={selectedStudent} updateStudent={handleUpdate}/>
            )}
        </div>
    );
}

