import typia from "../../../src";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_random } from "../internal/_test_random";

export const test_random_ArrayHierarchical = _test_random(
    "ArrayHierarchical",
    () => typia.random<ArrayHierarchical>(),
    typia.createAssert<ArrayHierarchical>(),
);