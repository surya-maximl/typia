import typia from "../../../../src";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectLiteralProperty = _test_equals(
    "ObjectLiteralProperty",
    ObjectLiteralProperty.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is ObjectLiteralProperty.ISomething => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input["something-interesting-do-you-want?"] &&
            "string" === typeof input["or-something-crazy-do-you-want?"] &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key) => {
                    if (
                        [
                            "something-interesting-do-you-want?",
                            "or-something-crazy-do-you-want?",
                        ].some((prop) => key === prop)
                    )
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);