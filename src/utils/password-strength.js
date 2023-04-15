const hasNumber = (number) => new RegExp(/[0-9]/).test(number);
const hasMixed = (number) => new RegExp(/[a-z]/).test(number) && new RegExp(/[A-Z]/).test(number);
const hasSpecial = (number) => new RegExp(/[!#@$%^&*)(+=._-]/).test(number);

// set color based on password strength
export const strengthColor = (level) => {
    if (level < 2) return { label: 'Poor', color: "#f44336" };
    if (level < 3) return { label: 'Weak', color: "#ffc107" };
    if (level < 4) return { label: 'Normal', color: "#ffab91" };
    if (level < 5) return { label: 'Good', color: "#00e676" };
    if (level < 6) return { label: 'Strong', color: "#00c853" };
    return { label: 'Poor', color: "#f44336" };
};

// password strength indicator
export const strengthIndicator = (number) => {
    let strengths = 0;
    if (number.length > 5) strengths += 1;
    if (number.length > 7) strengths += 1;
    if (hasNumber(number)) strengths += 1;
    if (hasSpecial(number)) strengths += 1;
    if (hasMixed(number)) strengths += 1;
    return strengths;
};
