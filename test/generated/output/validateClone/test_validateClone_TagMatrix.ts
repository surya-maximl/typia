import typia from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TagMatrix = _test_validateClone(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: any): typia.IValidation<typia.Primitive<TagMatrix>> => {
            const validate = (input: any): typia.IValidation<TagMatrix> => {
                const errors = [] as any[];
                const $report = (typia.validateClone as any).report(errors);
                const $is_uuid = (typia.validateClone as any).is_uuid;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagMatrix => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            (((Array.isArray(input.matrix) &&
                                3 === input.matrix.length) ||
                                $report(_exceptionable, {
                                    path: _path + ".matrix",
                                    expected: "Array<Array<string>>",
                                    value: input.matrix,
                                })) &&
                                input.matrix
                                    .map(
                                        (elem: any, _index1: number) =>
                                            (((Array.isArray(elem) &&
                                                3 === elem.length) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".matrix[" +
                                                        _index1 +
                                                        "]",
                                                    expected: "Array<string>",
                                                    value: elem,
                                                })) &&
                                                elem
                                                    .map(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            ("string" ===
                                                                typeof elem &&
                                                                true ===
                                                                    $is_uuid(
                                                                        elem,
                                                                    )) ||
                                                            $report(
                                                                _exceptionable,
                                                                {
                                                                    path:
                                                                        _path +
                                                                        ".matrix[" +
                                                                        _index1 +
                                                                        "][" +
                                                                        _index2 +
                                                                        "]",
                                                                    expected:
                                                                        "string",
                                                                    value: elem,
                                                                },
                                                            ),
                                                    )
                                                    .every(
                                                        (flag: boolean) => flag,
                                                    )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".matrix[" +
                                                    _index1 +
                                                    "]",
                                                expected: "Array<string>",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".matrix",
                                    expected: "Array<Array<string>>",
                                    value: input.matrix,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "Resolve<TagMatrix>",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<TagMatrix>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const clone = (input: TagMatrix): typia.Primitive<TagMatrix> => {
                const $is_uuid = (typia.validateClone as any).is_uuid;
                const $co0 = (input: any): any => ({
                    matrix: Array.isArray(input.matrix)
                        ? input.matrix.map((elem: any) =>
                              Array.isArray(elem)
                                  ? elem.map((elem: any) => elem as any)
                                  : (elem as any),
                          )
                        : (input.matrix as any),
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        })(input),
    TagMatrix.SPOILERS,
);