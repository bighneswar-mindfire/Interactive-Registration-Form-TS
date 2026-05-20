import { type AppState } from "../../types/types";

export const Form = (state: AppState): string => {
    const getErrClass = (field: string) => state.errors[field] ? "" : "hide";
    const getErrMsg = (field: string) => state.errors[field] || "";

    
    const { name, mail, phone, gender } = state.formData;

    return `
        <div>
            <h2>Registration Form</h2>
            <form id="regForm">
                <label>Full name:</label>
                <input type="text" name="name" value="${name}"><br>
                <label class="validation ${getErrClass('name')}">${getErrMsg('name')}</label>
                <br><br>

                <label>Email address:</label>
                <input type="email" name="mail" value="${mail}"><br>
                <label class="validation ${getErrClass('mail')}">${getErrMsg('mail')}</label>
                <br><br>

                <label>Phone number:</label>
                <input type="tel" name="phone" value="${phone}"><br>
                <label class="validation ${getErrClass('phone')}">${getErrMsg('phone')}</label>
                <br><br>

                <label>Gender:</label>
                <input type="radio" value="Male" name="gender" ${gender === 'Male' ? 'checked' : ''}> Male
                <input type="radio" value="Female" name="gender" ${gender === 'Female' ? 'checked' : ''}> Female
                <input type="radio" value="Other" name="gender" ${gender === 'Other' ? 'checked' : ''}> Other
                <br>
                <label class="validation ${getErrClass('gender')}">${getErrMsg('gender')}</label>
                <br><br>
                
                <input type="submit" value="${state.editingId ? "Update" : "Submit"}">
            </form>
        </div>
    `;
};