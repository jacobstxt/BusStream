package org.example.controllers;


import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.example.data.dto.account.RegisterUserDTO;
import org.example.data.dto.account.UserItemDTO;
import org.example.services.AccountService;
import org.example.validators.helpers.ValidatedDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
@Tag(name = "Account", description = "Користувач")
public class AccountController {
    private final AccountService accountService;
    @PostMapping(value = "register", consumes = MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<UserItemDTO> register(@ValidatedDTO @ModelAttribute RegisterUserDTO dto) {
        return ResponseEntity.ok(accountService.registerUser(dto));
    }


}
