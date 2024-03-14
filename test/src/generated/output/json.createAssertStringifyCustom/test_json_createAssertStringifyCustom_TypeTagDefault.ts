import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_createAssertStringifyCustom_TypeTagDefault =
  _test_json_assertStringify(CustomGuardError)(
    "TypeTagDefault",
  )<TypeTagDefault>(TypeTagDefault)(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): TypeTagDefault => {
        const __is = (input: any): input is TypeTagDefault => {
          const $io0 = (input: any): boolean =>
            "boolean" === typeof input.boolean &&
            "number" === typeof input.number &&
            Number.isFinite(input.number) &&
            "string" === typeof input.string &&
            "string" === typeof input.text &&
            (("number" === typeof input.boolean_and_number_and_string &&
              Number.isFinite(input.boolean_and_number_and_string)) ||
              "string" === typeof input.boolean_and_number_and_string ||
              "boolean" === typeof input.boolean_and_number_and_string) &&
            ("string" === typeof input.union_but_boolean ||
              ("number" === typeof input.union_but_boolean &&
                Number.isFinite(input.union_but_boolean)) ||
              "boolean" === typeof input.union_but_boolean) &&
            ("string" === typeof input.union_but_number ||
              ("number" === typeof input.union_but_number &&
                Number.isFinite(input.union_but_number)) ||
              "boolean" === typeof input.union_but_number) &&
            (("number" === typeof input.union_but_string &&
              Number.isFinite(input.union_but_string)) ||
              "string" === typeof input.union_but_string ||
              "boolean" === typeof input.union_but_string) &&
            null !== input.boolean_and_number_and_template &&
            undefined !== input.boolean_and_number_and_template &&
            (("number" === typeof input.boolean_and_number_and_template &&
              Number.isFinite(input.boolean_and_number_and_template)) ||
              "boolean" === typeof input.boolean_and_number_and_template ||
              ("string" === typeof input.boolean_and_number_and_template &&
                RegExp(/^prefix_(.*)/).test(
                  input.boolean_and_number_and_template,
                )));
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is TypeTagDefault => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("boolean" === typeof input.boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean",
                    expected: "(boolean & Default<false>)",
                    value: input.boolean,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.number &&
                Number.isFinite(input.number)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".number",
                    expected: "(number & Default<1>)",
                    value: input.number,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".string",
                    expected: '(string & Default<"two">)',
                    value: input.string,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.text ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".text",
                    expected:
                      '(string & Default<"Very long text, can you understand it?">)',
                    value: input.text,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.boolean_and_number_and_string &&
                Number.isFinite(input.boolean_and_number_and_string)) ||
                "string" === typeof input.boolean_and_number_and_string ||
                "boolean" === typeof input.boolean_and_number_and_string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_string",
                    expected:
                      '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
                    value: input.boolean_and_number_and_string,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.union_but_boolean ||
                ("number" === typeof input.union_but_boolean &&
                  Number.isFinite(input.union_but_boolean)) ||
                "boolean" === typeof input.union_but_boolean ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".union_but_boolean",
                    expected: "((boolean & Default<false>) | number | string)",
                    value: input.union_but_boolean,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.union_but_number ||
                ("number" === typeof input.union_but_number &&
                  Number.isFinite(input.union_but_number)) ||
                "boolean" === typeof input.union_but_number ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".union_but_number",
                    expected: "((number & Default<1>) | boolean | string)",
                    value: input.union_but_number,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.union_but_string &&
                Number.isFinite(input.union_but_string)) ||
                "string" === typeof input.union_but_string ||
                "boolean" === typeof input.union_but_string ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".union_but_string",
                    expected: '((string & Default<"two">) | boolean | number)',
                    value: input.union_but_string,
                  },
                  errorFactory,
                )) &&
              (null !== input.boolean_and_number_and_template ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  },
                  errorFactory,
                )) &&
              (undefined !== input.boolean_and_number_and_template ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.boolean_and_number_and_template &&
                Number.isFinite(input.boolean_and_number_and_template)) ||
                "boolean" === typeof input.boolean_and_number_and_template ||
                ("string" === typeof input.boolean_and_number_and_template &&
                  RegExp(/^prefix_(.*)/).test(
                    input.boolean_and_number_and_template,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".boolean_and_number_and_template",
                    expected:
                      "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
                    value: input.boolean_and_number_and_template,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "TypeTagDefault",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "TypeTagDefault",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: TypeTagDefault): string => {
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"boolean":${input.boolean},"number":${$number(input.number)},"string":${$string(input.string)},"text":${$string(input.text)},"boolean_and_number_and_string":${(() => {
            if ("number" === typeof input.boolean_and_number_and_string)
              return $number(input.boolean_and_number_and_string);
            if ("string" === typeof input.boolean_and_number_and_string)
              return $string(input.boolean_and_number_and_string);
            if ("boolean" === typeof input.boolean_and_number_and_string)
              return input.boolean_and_number_and_string;
            $throws({
              expected:
                '((boolean & Default<false>) | (number & Default<1>) | (string & Default<"two">))',
              value: input.boolean_and_number_and_string,
            });
          })()},"union_but_boolean":${(() => {
            if ("string" === typeof input.union_but_boolean)
              return $string(input.union_but_boolean);
            if ("number" === typeof input.union_but_boolean)
              return $number(input.union_but_boolean);
            if ("boolean" === typeof input.union_but_boolean)
              return input.union_but_boolean;
            $throws({
              expected: "((boolean & Default<false>) | number | string)",
              value: input.union_but_boolean,
            });
          })()},"union_but_number":${(() => {
            if ("string" === typeof input.union_but_number)
              return $string(input.union_but_number);
            if ("number" === typeof input.union_but_number)
              return $number(input.union_but_number);
            if ("boolean" === typeof input.union_but_number)
              return input.union_but_number;
            $throws({
              expected: "((number & Default<1>) | boolean | string)",
              value: input.union_but_number,
            });
          })()},"union_but_string":${(() => {
            if ("number" === typeof input.union_but_string)
              return $number(input.union_but_string);
            if ("string" === typeof input.union_but_string)
              return $string(input.union_but_string);
            if ("boolean" === typeof input.union_but_string)
              return input.union_but_string;
            $throws({
              expected: '((string & Default<"two">) | boolean | number)',
              value: input.union_but_string,
            });
          })()},"boolean_and_number_and_template":${(() => {
            if ("string" === typeof input.boolean_and_number_and_template)
              return $string(input.boolean_and_number_and_template);
            if ("number" === typeof input.boolean_and_number_and_template)
              return $number(input.boolean_and_number_and_template);
            if ("boolean" === typeof input.boolean_and_number_and_template)
              return input.boolean_and_number_and_template;
            $throws({
              expected:
                "((boolean & Default<false>) | (number & Default<2>) | `prefix_${string}`)",
              value: input.boolean_and_number_and_template,
            });
          })()}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    },
  );
