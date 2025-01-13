export class MemberRequestDmo {
  constructor(public memberId: number) {}
}

export class MemberDmo {
  loginId: string
  name: string

  constructor(fields: MemberDmo) {
    this.loginId = fields.loginId
    this.name = fields.name
  }
}
