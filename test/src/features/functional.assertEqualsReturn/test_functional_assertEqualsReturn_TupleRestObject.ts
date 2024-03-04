import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsReturn_TupleRestObject =
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertEqualsReturn(p),
  );
