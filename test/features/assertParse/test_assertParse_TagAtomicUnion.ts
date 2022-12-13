import typia from "../../../src";
import { TagAtomicUnion } from "../../structures/TagAtomicUnion";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_TagAtomicUnion = _test_assertParse(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) => typia.assertParse<TagAtomicUnion>(input),
    TagAtomicUnion.SPOILERS,
);