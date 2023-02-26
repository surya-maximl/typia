import typia from "../../../../src";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ArrayHierarchical = _test_isStringify(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    (input: ArrayHierarchical): string | null => {
        const is = (input: any): input is ArrayHierarchical => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "number" === typeof input.serial &&
                Number.isFinite(input.serial) &&
                "string" === typeof input.name &&
                "object" === typeof input.established_at &&
                null !== input.established_at &&
                "number" === typeof input.established_at.time &&
                Number.isFinite(input.established_at.time) &&
                "number" === typeof input.established_at.zone &&
                Number.isFinite(input.established_at.zone) &&
                Array.isArray(input.departments) &&
                input.departments.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io2(elem),
                );
            const $io2 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.code &&
                "number" === typeof input.sales &&
                Number.isFinite(input.sales) &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                "number" === typeof input.created_at.time &&
                Number.isFinite(input.created_at.time) &&
                "number" === typeof input.created_at.zone &&
                Number.isFinite(input.created_at.zone) &&
                Array.isArray(input.employees) &&
                input.employees.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age) &&
                "number" === typeof input.grade &&
                Number.isFinite(input.grade) &&
                "object" === typeof input.employeed_at &&
                null !== input.employeed_at &&
                "number" === typeof input.employeed_at.time &&
                Number.isFinite(input.employeed_at.time) &&
                "number" === typeof input.employeed_at.zone &&
                Number.isFinite(input.employeed_at.zone);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        const stringify = (input: ArrayHierarchical): string => {
            const $number = (typia.createIsStringify as any).number;
            const $string = (typia.createIsStringify as any).string;
            const $io1 = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $io2 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "number" === typeof input.sales &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io1(input.created_at) &&
                Array.isArray(input.employees) &&
                input.employees.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io3(elem),
                );
            const $io3 = (input: any): boolean =>
                "number" === typeof input.id &&
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                "number" === typeof input.grade &&
                "object" === typeof input.employeed_at &&
                null !== input.employeed_at &&
                $io1(input.employeed_at);
            const $so0 = (input: any): any =>
                `{"id":${$number(input.id)},"serial":${$number(
                    input.serial,
                )},"name":${$string(
                    input.name,
                )},"established_at":${`{"time":${$number(
                    input.established_at.time,
                )},"zone":${$number(
                    input.established_at.zone,
                )}}`},"departments":${`[${input.departments
                    .map((elem: any) => $so2(elem))
                    .join(",")}]`}}`;
            const $so2 = (input: any): any =>
                `{"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"sales":${$number(
                    input.sales,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(
                    input.created_at.zone,
                )}}`},"employees":${`[${input.employees
                    .map((elem: any) => $so3(elem))
                    .join(",")}]`}}`;
            const $so3 = (input: any): any =>
                `{"id":${$number(input.id)},"name":${$string(
                    input.name,
                )},"age":${$number(input.age)},"grade":${$number(
                    input.grade,
                )},"employeed_at":${`{"time":${$number(
                    input.employeed_at.time,
                )},"zone":${$number(input.employeed_at.zone)}}`}}`;
            return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
        };
        return is(input) ? stringify(input) : null;
    },
    ArrayHierarchical.SPOILERS,
);