import typia from "../../../../src";
import { _test_protobuf_encode } from "../../../internal/_test_protobuf_encode";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_protobuf_encode_TemplateAtomic = _test_protobuf_encode(
    "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)({
    encode: (input: TemplateAtomic): Uint8Array => {
        const $Sizer = (typia.protobuf.createEncode as any).Sizer;
        const $Writer = (typia.protobuf.createEncode as any).Writer;
        const encoder = (writer: any): any => {
            const $peo0 = (input: any): any => {
                // property "prefix";
                writer.uint32(10);
                writer.string(input.prefix);
                // property "postfix";
                writer.uint32(18);
                writer.string(input.postfix);
                // property "middle_string";
                writer.uint32(26);
                writer.string(input.middle_string);
                // property "middle_string_empty";
                writer.uint32(34);
                writer.string(input.middle_string_empty);
                // property "middle_numeric";
                writer.uint32(42);
                writer.string(input.middle_numeric);
                // property "middle_boolean";
                writer.uint32(50);
                writer.string(input.middle_boolean);
                // property "ipv4";
                writer.uint32(58);
                writer.string(input.ipv4);
                // property "email";
                writer.uint32(66);
                writer.string(input.email);
            };
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    },
    message:
        'syntax = "proto3";\n\nmessage TemplateAtomic {\n    required string prefix = 1;\n    required string postfix = 2;\n    required string middle_string = 3;\n    required string middle_string_empty = 4;\n    required string middle_numeric = 5;\n    required string middle_boolean = 6;\n    required string ipv4 = 7;\n    required string email = 8;\n}',
});