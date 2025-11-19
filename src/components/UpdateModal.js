import React from "react";

function UpdateModal() {
    return (
       <div className="modal fade" id="editModal" tabindex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">학생 정보 수정</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label className="form-label">ID (필수!)</label>
                        <input type="text" className="form-control" id="edit_id"/>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="edit_name"/>
                    </div>
                    <div class="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" id="edit_age"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Score</label>
                        <input type="number" className="form-control" id="edit_score"/>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">닫기</button>  
                    <button type="button" className="btn btn-primary" id="btn_save_edit">수정하기</button>
                </div>
            </div>
        </div>
    </div>
    );
}
