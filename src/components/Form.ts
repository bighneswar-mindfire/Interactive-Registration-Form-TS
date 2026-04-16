import { type AppState } from "../types";

export const Form = (state: AppState): string => {
    
    const isHidden = (field: string) => state.errors[field] ? "" : "hide";

    return `
        <div>
            <h2>Registration Form</h2>
            <form id="regForm">
                <label for="name">Full name:</label>
                <input type="text" id="name" name="name"><br>
                <label class="validation ${isHidden('name')}" id="nameValidation">Name is required</label>
                <br><br>

                <label for="mail">Email address:</label>
                <input type="email" id="mail" name="mail"><br>
                <label class="validation ${isHidden('mail')}" id="mailValidation">Email is required</label>
                <br><br>

                <label for="phone">Phone number:</label>
                <input type="tel" id="phone" name="phone"><br>
                <label class="validation ${isHidden('phone')}" id="phoneValidation">Phone no. is required</label>
                <br><br>

                <label for="gender">Gender:</label>
                <input type="radio" id="male" value="Male" name="gender">
                <label for="male">Male</label>

                <input type="radio" id="female" value="Female" name="gender">
                <label for="female">Female</label>

                <input type="radio" id="other" value="Other" name="gender">
                <label for="other">Other</label>
                <br>
                <label class="validation ${isHidden('gender')}" id="genderValidation">Gender is required</label>
                <br><br>
                
                <input type="submit" value="Submit">
            </form>
        </div>
    `;
};