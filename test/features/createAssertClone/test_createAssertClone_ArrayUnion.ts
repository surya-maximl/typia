import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ArrayUnion = _test_assertClone(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertClone<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);