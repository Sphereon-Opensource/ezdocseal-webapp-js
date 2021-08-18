/**
 * Get form data
 *
 * @param {{}} obj
 * @param {FormData} [formData]
 *
 * @returns {FormData}
 */
export const getFormData = (obj, formData) => {
  return Object.keys(obj).reduce((formData, key) => {
    const value = obj[key];

    if (Array.isArray(value)) {
      value.forEach((value, index) => {
        formData.append(`${key}[${index}]`, value);
      });
    } else {
      formData.append(key, value);
    }

    return formData;
  }, formData || new FormData());
};
