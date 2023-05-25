declare function __volume_of_cube(side: number): number;
/**
 * Get function volume of cuboid
 *
 * @param {number} l length
 * @param {number} b breadth
 * @param {number} h height
 */
declare function __volume_of_cuboid(l: number, b: number, h: number): number;
declare function __volume_of_cylender(radius: number, height: number): number;
declare function __volume_of_cone(radius: number, height: number): number;
declare function __volume_of_sphere(radius: number): number;
declare function __volume_of_hemisphere(radius: number): number;
declare function __cubeMeter_to_cubeCentimeter(cubeMeter: number): number;
declare function __cubeCentimeter_to_cubeMeter(cubeCentimeter: number): number;
declare function __cubeMillimeter_to_cubeCentimeter(cubeMillimeter: number): number;
declare function __cubeCentimeter_to_cubeMillimeter(cubeCentimeter: number): number;
declare function __volumeOf(shape: string): string;
export { __volumeOf, __volume_of_cone, __volume_of_cube, __volume_of_cuboid, __volume_of_cylender, __volume_of_hemisphere, __volume_of_sphere, __cubeCentimeter_to_cubeMeter, __cubeCentimeter_to_cubeMillimeter, __cubeMeter_to_cubeCentimeter, __cubeMillimeter_to_cubeCentimeter };
