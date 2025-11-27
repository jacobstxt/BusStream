package org.example.data.dto.account;
import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class LoginUserDTO {
    private String email;
    private String password;
}
