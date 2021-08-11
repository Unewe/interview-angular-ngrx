export type RequireSelective<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} & {
  [P in K]-?: T[P]
}
