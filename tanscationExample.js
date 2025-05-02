// transactionExample.js
const pool = require('./db');

async function doTransaction() {
    let conn;
    let data;
    let student_id = 'S10721001'
    try {
        conn = await pool.getConnection();
        await conn.beginTransaction(); // 開始交易

        // 假設要同時將學生 'S10810005' 的系所由 CS001 換成 EE001
        const updateStudent = 'UPDATE STUDENT SET Department_ID = ? WHERE Student_ID = ?';
        data = await conn.query(updateStudent, ['EE001', student_id]);
        
        if (data.affectedRows > 0) {
            console.log('已更新學生系所');
        } else {
            throw new Error("沒有找到該學生，無法更新系所")
        }

        // 假設同時更新其他相關表格
        // 例如：更新學生選課表中的系所標記
        const updateCourses = 'UPDATE ENROLLMENT SET Status = ? WHERE Student_ID = ?';
        data = await conn.query(updateCourses, ['轉系', student_id]);
        
        if (data.affectedRows > 0) {
            console.log('已更新學生選課表中的系所標記');
        } else {
            throw new Error("沒有找到該學生，無法更新選課表中的系所標記");
        }

        // 如果以上操作都成功，則提交交易
        await conn.commit();
        console.log('交易成功，已提交');

        const selectStudent = 'SELECT Student_ID, Name, Department_ID Department FROM STUDENT WHERE Student_ID = ?';
        data = await conn.query(selectStudent, [student_id]);
        console.log('查詢結果：', data);
        

    } catch (err) {
        // 若有任何錯誤，回滾所有操作
        if (conn) await conn.rollback();
        console.error('交易失敗，已回滾：', err);
    } finally {
        if (conn) conn.release();
    }
}

doTransaction();
