import 'reflect-metadata'

import { container } from 'tsyringe'
import Token from './token'

import { MemberDataSource } from '../datasource/member'
import { DefaultMemberRepository, MemberRepository } from '../repository/member'
import { MemberUseCase } from '../usecase/member'

container.register<MemberDataSource>(MemberDataSource, { useClass: MemberDataSource })
container.register<MemberRepository>(Token.MemberRepository, { useClass: DefaultMemberRepository })
const member: MemberUseCase = container.resolve<MemberUseCase>(MemberUseCase)

export default { member }
