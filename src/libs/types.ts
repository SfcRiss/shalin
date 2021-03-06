export type Coords3 = [number, number, number];
export type GeneratorType = 'default' | 'flat' | 'sin-cos';

export type MeshResultType = {
  positions: Float32Array;
  normals: Float32Array;
  indices: Float32Array;
};
