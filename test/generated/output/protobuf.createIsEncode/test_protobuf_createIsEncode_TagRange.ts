import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { TagRange } from "../../../structures/TagRange";

export const test_protobuf_isEncode_TagRange = _test_protobuf_isEncode(
    "TagRange",
)<TagRange>(TagRange)({
    isEncode: (input: TagRange): Uint8Array | null => {
        const is = (input: any): input is TagRange => {
            const $io0 = (input: any): boolean =>
                Array.isArray(input.value) &&
                input.value.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io1(elem),
                );
            const $io1 = (input: any): boolean =>
                "number" === typeof input.greater &&
                Number.isFinite(input.greater) &&
                Math.floor(input.greater) === input.greater &&
                -2147483648 <= input.greater &&
                input.greater <= 2147483647 &&
                3 < input.greater &&
                "number" === typeof input.greater_equal &&
                Number.isFinite(input.greater_equal) &&
                Math.floor(input.greater_equal) === input.greater_equal &&
                -2147483648 <= input.greater_equal &&
                input.greater_equal <= 2147483647 &&
                3 <= input.greater_equal &&
                "number" === typeof input.less &&
                Number.isFinite(input.less) &&
                Math.floor(input.less) === input.less &&
                -2147483648 <= input.less &&
                input.less <= 2147483647 &&
                7 > input.less &&
                "number" === typeof input.less_equal &&
                Number.isFinite(input.less_equal) &&
                Math.floor(input.less_equal) === input.less_equal &&
                -2147483648 <= input.less_equal &&
                input.less_equal <= 2147483647 &&
                7 >= input.less_equal &&
                "number" === typeof input.greater_less &&
                Math.floor(input.greater_less) === input.greater_less &&
                -2147483648 <= input.greater_less &&
                input.greater_less <= 2147483647 &&
                3 < input.greater_less &&
                7 > input.greater_less &&
                "number" === typeof input.greater_equal_less &&
                Math.floor(input.greater_equal_less) ===
                    input.greater_equal_less &&
                -2147483648 <= input.greater_equal_less &&
                input.greater_equal_less <= 2147483647 &&
                3 <= input.greater_equal_less &&
                7 > input.greater_equal_less &&
                "number" === typeof input.greater_less_equal &&
                Math.floor(input.greater_less_equal) ===
                    input.greater_less_equal &&
                -2147483648 <= input.greater_less_equal &&
                input.greater_less_equal <= 2147483647 &&
                3 < input.greater_less_equal &&
                7 >= input.greater_less_equal &&
                "number" === typeof input.greater_equal_less_equal &&
                Math.floor(input.greater_equal_less_equal) ===
                    input.greater_equal_less_equal &&
                -2147483648 <= input.greater_equal_less_equal &&
                input.greater_equal_less_equal <= 2147483647 &&
                3 <= input.greater_equal_less_equal &&
                7 >= input.greater_equal_less_equal &&
                "number" === typeof input.equal &&
                Math.floor(input.equal) === input.equal &&
                -2147483648 <= input.equal &&
                input.equal <= 2147483647 &&
                10 <= input.equal &&
                10 >= input.equal;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const encode = (input: TagRange): Uint8Array => {
            const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
            const $Writer = (typia.protobuf.createIsEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    if (0 !== input.value.length) {
                        for (const elem of input.value) {
                            writer.uint32(10);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "greater";
                    writer.uint32(8);
                    writer.int32(input.greater);
                    // property "greater_equal";
                    writer.uint32(16);
                    writer.int32(input.greater_equal);
                    // property "less";
                    writer.uint32(24);
                    writer.int32(input.less);
                    // property "less_equal";
                    writer.uint32(32);
                    writer.int32(input.less_equal);
                    // property "greater_less";
                    writer.uint32(40);
                    writer.int32(input.greater_less);
                    // property "greater_equal_less";
                    writer.uint32(48);
                    writer.int32(input.greater_equal_less);
                    // property "greater_less_equal";
                    writer.uint32(56);
                    writer.int32(input.greater_less_equal);
                    // property "greater_equal_less_equal";
                    writer.uint32(64);
                    writer.int32(input.greater_equal_less_equal);
                    // property "equal";
                    writer.uint32(72);
                    writer.int32(input.equal);
                };
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.greater &&
                    Math.floor(input.greater) === input.greater &&
                    -2147483648 <= input.greater &&
                    input.greater <= 2147483647 &&
                    3 < input.greater &&
                    "number" === typeof input.greater_equal &&
                    Math.floor(input.greater_equal) === input.greater_equal &&
                    -2147483648 <= input.greater_equal &&
                    input.greater_equal <= 2147483647 &&
                    3 <= input.greater_equal &&
                    "number" === typeof input.less &&
                    Math.floor(input.less) === input.less &&
                    -2147483648 <= input.less &&
                    input.less <= 2147483647 &&
                    7 > input.less &&
                    "number" === typeof input.less_equal &&
                    Math.floor(input.less_equal) === input.less_equal &&
                    -2147483648 <= input.less_equal &&
                    input.less_equal <= 2147483647 &&
                    7 >= input.less_equal &&
                    "number" === typeof input.greater_less &&
                    Math.floor(input.greater_less) === input.greater_less &&
                    -2147483648 <= input.greater_less &&
                    input.greater_less <= 2147483647 &&
                    3 < input.greater_less &&
                    7 > input.greater_less &&
                    "number" === typeof input.greater_equal_less &&
                    Math.floor(input.greater_equal_less) ===
                        input.greater_equal_less &&
                    -2147483648 <= input.greater_equal_less &&
                    input.greater_equal_less <= 2147483647 &&
                    3 <= input.greater_equal_less &&
                    7 > input.greater_equal_less &&
                    "number" === typeof input.greater_less_equal &&
                    Math.floor(input.greater_less_equal) ===
                        input.greater_less_equal &&
                    -2147483648 <= input.greater_less_equal &&
                    input.greater_less_equal <= 2147483647 &&
                    3 < input.greater_less_equal &&
                    7 >= input.greater_less_equal &&
                    "number" === typeof input.greater_equal_less_equal &&
                    Math.floor(input.greater_equal_less_equal) ===
                        input.greater_equal_less_equal &&
                    -2147483648 <= input.greater_equal_less_equal &&
                    input.greater_equal_less_equal <= 2147483647 &&
                    3 <= input.greater_equal_less_equal &&
                    7 >= input.greater_equal_less_equal &&
                    "number" === typeof input.equal &&
                    Math.floor(input.equal) === input.equal &&
                    -2147483648 <= input.equal &&
                    input.equal <= 2147483647 &&
                    10 <= input.equal &&
                    10 >= input.equal;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        };
        return is(input) ? encode(input) : null;
    },
    message:
        'syntax = "proto3";\n\nmessage TagRange {\n    repeated TagRange.Type value = 1;\n    message Type {\n        required int32 greater = 1;\n        required int32 greater_equal = 2;\n        required int32 less = 3;\n        required int32 less_equal = 4;\n        required int32 greater_less = 5;\n        required int32 greater_equal_less = 6;\n        required int32 greater_less_equal = 7;\n        required int32 greater_equal_less_equal = 8;\n        required int32 equal = 9;\n    }\n}',
});