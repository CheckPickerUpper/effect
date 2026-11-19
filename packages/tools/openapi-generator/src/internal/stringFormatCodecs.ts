import * as Codegen from "effect/Codegen"

type BigIntRange = {
  readonly minimum: bigint
  readonly maximum: bigint
}

function bigIntCodec({ schema, minimum, maximum }: BigIntRange & { readonly schema: Codegen.Binding }) {
  return Codegen
    .code`${schema}.BigIntFromString.check(${schema}.isBetweenBigInt({ minimum: globalThis.BigInt("${minimum.toString()}"), maximum: globalThis.BigInt("${maximum.toString()}") }))`
}

/** Codecs for the OpenAPI formats represented as non-string Effect values. */
export const stringFormatCodecs: Codegen.StringFormatCodecs = (schema) =>
  new Map([
    ["date-time", Codegen.code`${schema}.DateTimeUtcFromString`],
    ["int64", bigIntCodec({ schema, minimum: BigInt("-9223372036854775808"), maximum: BigInt("9223372036854775807") })],
    ["uint64", bigIntCodec({ schema, minimum: BigInt(0), maximum: BigInt("18446744073709551615") })]
  ])
