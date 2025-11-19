import React from "react";

function CreateModal() {
    return (
        <div className="modal fade" id="CreateModal" tabindex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">새 학생 추가</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="add_name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">age</label>
                        <input type="number" className="form-control" id="add_age"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Score</label>
                        <input type="number" className="form-control" id="add_score"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>  
                    <button type="button" className="btn btn-primary" id="btn_save_add">저장하기</button>
                </div>
            </div>
        </div>
    </div>
    );
}