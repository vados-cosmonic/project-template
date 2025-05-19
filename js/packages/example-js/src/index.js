/**
 * This project cases basic functionality that can be included in a project
 *
 */

/**
 * Generate a greeting
 *
 * @param {string} [name] - the name of the entity to greet
 * @returns {string} A string that contains a greeting
 */
export function greet(name) {
    return `Hello, ${name || 'world'}`;
}
