// Object representing different symptoms in English
const Symptom = {
    Head: 'Head',
    Face: 'Face',
    Neck: 'Neck',
    Chest: 'Chest',
    Abdomen: 'Abdomen',
    Pelvis: 'Pelvis',
    Arm: 'Arm',
    Leg: 'Leg',
    Other: 'Other',
};

/**
 * Converts an array of Korean body parts to English equivalents based on the Symptom object.
 * @param {string[]} koreanParts - Array of body parts in Korean.
 * @returns {string[]} Array of body parts in English.
 */
function convertToEnglish(koreanParts) {
    if (!Array.isArray(koreanParts)) return [];

    return koreanParts.map(kor => {
        switch (kor) {
            case '머리':
                return Symptom.Head;
            case '얼굴':
                return Symptom.Face;
            case '목':
                return Symptom.Neck;
            case '가슴':
                return Symptom.Chest;
            case '복부':
                return Symptom.Abdomen;
            case '골반':
                return Symptom.Pelvis;
            case '팔':
                return Symptom.Arm;
            case '다리':
                return Symptom.Leg;
            default:
                return Symptom.Other;
        }
    });
}

export default convertToEnglish