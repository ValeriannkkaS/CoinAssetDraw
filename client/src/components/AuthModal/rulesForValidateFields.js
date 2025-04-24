export const rulesForValidateUsernameOrEmailSignIn = {
    required: {
        value: true,
        message: 'This field must be filled in',
    },
    validate: {
        onlyLettersAndNumbers: (value) =>
            /^[a-zA-Z0-9_.-]+$/.test(value) ||
            'The name has only English letters and numbers.',
    },
};
export const rulesForValidatePasswordSignIn = {
    required: {
        value: true,
        message: 'This field must be filled in',
    },
    validate: {
        noSpaces: (value) => /^\S+$/.test(value) || 'Spaces are forbidden.',
    },
};
export const rulesForValidateEmailSignUp = {
    required: {
        value: true,
        message: 'This field must be filled in',
    },
    validate: {
        incorrectFormat: (value) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
            'Incorrect email address',
        noSpaces: (value) => /^\S+$/.test(value) || 'Spaces are forbidden.',
        incorrectDomain: (value) =>
            /@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || 'incorrect domain',
    },
};
export const rulesForValidateUsernameSignUp = {
    required: {
        value: true,
        message: 'This field must be filled in',
    },
    minLength: {
        value: 5,
        message: 'Username must be greater than 5 characters',
    },
    maxLength: {
        value: 14,
        message: 'Maximum characters of username is 14',
    },
    validate: {
        forbiddenSymbols: (value) =>
            /^[a-zA-Z0-9_.-]+$/.test(value) ||
            'Only Latin letters (a-z), numbers (0-9) and the characters _ . -',
        dontStartsWithLetter: (value) =>
            /^[a-zA-Z]/.test(value) ||
            'The name must begin with a letter (a-z, A-Z)',
        noSpaces: (value) => /^\S+$/.test(value) || 'Spaces are forbidden.',
        endWithForbiddenSymbols: (value) =>
            /.*[a-zA-Z0-9]$/.test(value) || 'A name cannot end in _ . -',
        noRepeatedSpecials: (value) =>
            /^(?!.*[_.-]{2})[a-zA-Z0-9_.-]+$/.test(value) ||
            'The characters _ . - cannot be repeated',
        reservedNames: (value) =>
            !/^(admin|root|support|system)$/i.test(value) ||
            'Reserved username',
    },
};
export const rulesForValidatePasswordSignUp = {
    required: {
        value: true,
        message: 'This field must be filled in',
    },
    minLength: {
        value: 8,
        message: 'Password must be greater than 8 characters',
    },
    maxLength: {
        value: 20,
        message: 'Maximum characters of password is 20',
    },
    validate: {
        hasLatin: (value) =>
            /^[\x00-\x7F]+$/.test(value) || 'Allowed only English Letters',
        hasLowercase: (value) =>
            /[a-z]/.test(value) || 'Password must include one lowercase letter',
        hasUppercase: (value) =>
            /[A-Z]/.test(value) || 'Password must include one uppercase letter',
        hasNumber: (value) =>
            /\d/.test(value) || 'Password must include one number',
        hasSpecialSymbol: (value) =>
            /[^a-zA-Z0-9]/.test(value) ||
            'password must include one special symbol (!, ?, &)',
        noSpaces: (value) => /^\S+$/.test(value) || 'Spaces are forbidden.',
    },
};
export const rulesForValidateConfirmPasswordSignUp = {
    required: {
        value: true,
        message: 'This field must be filled in',
    },
};
