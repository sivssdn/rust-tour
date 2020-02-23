import React from "react";

const chapter3: React.FC = () => {
    return (
        <p>
            Rust being a statically typed language, has data types. The primitive types contains scalar and compound data types. <br />
            <div className="section"></div>
            Few things to remember while handling data types: <br />

            - All variables are immutable by default. <br />
            - Rust is block scoped. <br />
            - Specifying data type explicitly is not always required for primitive types. <br />

            <div className="section"></div>
            <strong>Scalar Types:</strong> <br />
            Integer - unsigned being only positive, signed being both negative and positive<br />
            <table>
                <thead>
                    <tr>
                        <th>Size</th>
                        <th>Unsigned</th>
                        <th>Signed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8 bits</td>
                        <td>u8</td>
                        <td>i8</td>
                    </tr>
                    <tr>
                        <td>16 bits</td>
                        <td>u16</td>
                        <td>i16</td>
                    </tr>
                    <tr>
                        <td>32 bits</td>
                        <td>u32</td>
                        <td>i32</td>
                    </tr>
                    <tr>
                        <td>64 bits</td>
                        <td>u64</td>
                        <td>i64</td>
                    </tr>
                    <tr>
                        <td>128 bits</td>
                        <td>u128</td>
                        <td>i128</td>
                    </tr>
                </tbody>
            </table>

            <div className="section"></div>
            Float - f32, f64 for 32 bits and 64 bits respectively. <br />
            Boolean - bool <br />
            Character - char <br />

            <div className="section"></div>
            <strong>Compound Types:</strong> <br />
            Compound data types contains collection of scalar types.
            <br /><br />
            Tuples - A collection of values of different data types. <br />
            Arrays - A collection of values of similar data types.

            <div className="section"></div>
            Let's talk about strings next.
        </p >
    )
}

export default chapter3;