import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_ObjectNullable = _test_prune(
    "ObjectNullable",
    ObjectNullable.generate,
    typia.createPrune<ObjectNullable>(),
);