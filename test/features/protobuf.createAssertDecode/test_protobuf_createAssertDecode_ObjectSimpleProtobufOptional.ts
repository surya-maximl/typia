import typia from "../../../src";
import { _test_protobuf_assertDecode } from "../../internal/_test_protobuf_assertDecode";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_protobuf_assertDecode_ObjectSimpleProtobufOptional =
    _test_protobuf_assertDecode(
        "ObjectSimpleProtobufOptional",
    )<ObjectSimpleProtobufOptional>(ObjectSimpleProtobufOptional)({
        assertDecode:
            typia.protobuf.createAssertDecode<ObjectSimpleProtobufOptional>(),
        encode: typia.protobuf.createEncode<ObjectSimpleProtobufOptional>(),
    });