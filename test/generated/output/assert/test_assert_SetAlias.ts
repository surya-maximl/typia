import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { SetAlias } from "../../../structures/SetAlias";

export const test_assert_SetAlias = _test_assert(
    "SetAlias",
    SetAlias.generate,
    (input) =>
        ((input: any): SetAlias => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is SetAlias => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (input.booleans instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".booleans",
                            expected: "Set<boolean>",
                            value: input.booleans,
                        })) &&
                    [...input.booleans].every(
                        (elem: any, _index1: number) =>
                            "boolean" === typeof elem ||
                            $guard(_exceptionable, {
                                path: _path + ".booleans[" + _index1 + "]",
                                expected: "boolean",
                                value: elem,
                            }),
                    ) &&
                    (input.numbers instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".numbers",
                            expected: "Set<number>",
                            value: input.numbers,
                        })) &&
                    [...input.numbers].every(
                        (elem: any, _index2: number) =>
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            $guard(_exceptionable, {
                                path: _path + ".numbers[" + _index2 + "]",
                                expected: "number",
                                value: elem,
                            }),
                    ) &&
                    (input.strings instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".strings",
                            expected: "Set<string>",
                            value: input.strings,
                        })) &&
                    [...input.strings].every(
                        (elem: any, _index3: number) =>
                            "string" === typeof elem ||
                            $guard(_exceptionable, {
                                path: _path + ".strings[" + _index3 + "]",
                                expected: "string",
                                value: elem,
                            }),
                    ) &&
                    (input.arrays instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".arrays",
                            expected: "Set<Array<number>>",
                            value: input.arrays,
                        })) &&
                    [...input.arrays].every(
                        (elem: any, _index4: number) =>
                            (Array.isArray(elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".arrays[" + _index4 + "]",
                                    expected: "Array<number>",
                                    value: elem,
                                })) &&
                            elem.every(
                                (elem: any, _index5: number) =>
                                    ("number" === typeof elem &&
                                        Number.isFinite(elem)) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".arrays[" +
                                            _index4 +
                                            "][" +
                                            _index5 +
                                            "]",
                                        expected: "number",
                                        value: elem,
                                    }),
                            ),
                    ) &&
                    (input.objects instanceof Set ||
                        $guard(_exceptionable, {
                            path: _path + ".objects",
                            expected: "Set<Resolve<SetAlias.Person>>",
                            value: input.objects,
                        })) &&
                    [...input.objects].every(
                        (elem: any, _index6: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".objects[" + _index6 + "]",
                                    expected: "Resolve<SetAlias.Person>",
                                    value: elem,
                                })) &&
                            $ao1(
                                elem,
                                _path + ".objects[" + _index6 + "]",
                                true && _exceptionable,
                            ),
                    );
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (("number" === typeof input.age &&
                        Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number",
                            value: input.age,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<SetAlias>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
            return input;
        })(input),
    SetAlias.SPOILERS,
);