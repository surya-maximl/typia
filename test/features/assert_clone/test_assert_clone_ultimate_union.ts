import TSON from "../../../src";
import { UltimateUnion } from "../../structures/UltimateUnion";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_ultimate_union = _test_assert_clone(
    "ultimate union",
    UltimateUnion.generate,
    (input) => TSON.assertClone(input),
);