<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'price' => 'required',
            'supplier_id' => 'required|integer',
            'warehouse_id' => 'required|integer'
        ];
    }

    public function messages()
    {
        return [
            'name' => [
                'required' => 'Name field is required'
            ],
            'price' => [
                'required' => 'Price field is required',
                'numeric' => 'Invalid price'
            ],
            'warehouse_id' => [
                'required' => 'Warehouse field is required',
            ],
            'supplier_id' => [
                'required' => 'Supplier field is required',
            ]
        ];
    }
}
