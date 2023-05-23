export default interface Quest {
  name: string
  point: string
  type: "team" | "individual"
  assignTime?: Date
  assignTo?: string
}
