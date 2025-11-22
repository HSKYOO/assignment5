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
        fetch('${API_URL}/${id}', {
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
            fetch('${API_URL}/${id}', {
                method: "DELETE",
            }).then(() => {
                getStudents();
            });
        }
    };
    
    return (
        <div>
            <h1>데이터 목록</h1>
        </div>
    );
}

