import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_AtomicClass =
  _test_functional_assertEqualsReturn(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => AtomicClass) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );